// Service worker do Star: tenta a rede primeiro e usa o cache se estiver sem conexão.
const C='star-v2';
self.addEventListener('install',e=>{self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request,u=new URL(r.url);
  if(r.method!=='GET'||!(u.origin===location.origin||u.hostname==='www.gstatic.com'))return;
  e.respondWith(fetch(r).then(res=>{if(res&&res.ok){const c=res.clone();caches.open(C).then(x=>x.put(r,c)).catch(()=>{})}return res}).catch(()=>caches.match(r)))
});
