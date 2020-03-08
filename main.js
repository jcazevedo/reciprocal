f=(a,k,t,i=0)=>t.replace(/./g,h=>~(c=a.indexOf(h))?a[(a+a).indexOf(k[i++%k.length],c)-c]||h:"")
