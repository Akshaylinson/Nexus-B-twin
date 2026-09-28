const DB_NAME = 'nexus-local-world'; const STORE = 'world';
export const db = {
  async open() { return new Promise((resolve, reject) => { const r=indexedDB.open(DB_NAME,1); r.onupgradeneeded=()=>r.result.createObjectStore(STORE); r.onsuccess=()=>resolve(r.result); r.onerror=()=>reject(r.error); }); },
  async load() { const d=await this.open(); return new Promise((resolve,reject)=>{const r=d.transaction(STORE).objectStore(STORE).get('current');r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error)}); },
  async save(world) { const d=await this.open(); return new Promise((resolve,reject)=>{const r=d.transaction(STORE,'readwrite').objectStore(STORE).put(world,'current');r.onsuccess=()=>resolve();r.onerror=()=>reject(r.error)}); },
  async clear() { const d=await this.open(); return new Promise((resolve,reject)=>{const r=d.transaction(STORE,'readwrite').objectStore(STORE).clear();r.onsuccess=()=>resolve();r.onerror=()=>reject(r.error)}); }
};
