document.addEventListener("DOMContentLoaded",(function(){function e(e,r){document.querySelectorAll('a[target="_blank"]').forEach((function(e){e.removeAttribute("target")})),function o(t){if(3===t.nodeType){const o=t.nodeValue.replace(new RegExp(e,"g"),r);o!==t.nodeValue&&(t.nodeValue=o)}else 1!==t.nodeType||["SCRIPT","STYLE"].includes(t.nodeName)||Array.from(t.childNodes).forEach(o)}(document.body)}document.querySelectorAll(".pageus-form").forEach((function(e){e.querySelectorAll("[required]").forEach((function(e){console.log(e.name),e.removeAttribute("required"),e.classList.add("pageus-input-required")}))})),document.addEventListener("submit",(async function(e){if(!e.target.matches(".pageus-form"))return;e.preventDefault();let r=e.target;const o=r.querySelectorAll(".pageus-input-required");let t=!0;if(o.forEach((function(e){e.value?e.style.borderColor="":(t=!1,e.style.borderColor="red")})),!t)return alert("Por favor, preencha todos os campos obrigatórios."),!1;const n=r.querySelector('input[name="messageSuccess"]')?.value||"Mensagem enviada com sucesso.",a=r.querySelector('input[name="messageError"]')?.value||"Erro ao enviar o formulário.",s=r.querySelector('input[name="messageServer"]')?.value||"Erro no servidor.",i=r.querySelector("#webhookUrl")?.value||null,c=r.querySelector('input[name="redirectUrl"]')?.value||null,u=r.querySelector('div[id^="form-message-"]'),l=u?u.querySelector("p"):null,d=new FormData(r),m={formData:{}};d.forEach((function(e,r){"name"===r||"phone"===r||"pageId"===r||"email"===r||"leadGroupId"===r?m[r]=e:m.formData[r]=e})),l&&(l.textContent="",l.classList.remove("form-message-success","form-message-error"),l.removeAttribute("data-type"));const f=r.querySelector('button[type="submit"]'),p=f.innerHTML;f.disabled=!0,f.innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Carregando...';try{const e=await fetch(r.action,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)});if(!e.ok)throw new Error(`Erro ${e.status}: ${e.statusText}`);i&&await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)});(await e.json()).message?(l.textContent=n,l.classList.add("form-message-success"),c&&(window.location.href=c)):(l.textContent=a,l.classList.add("form-message-error"))}catch(e){console.error("Error:",e.message),l&&(l.textContent=e.message.includes("Erro do servidor")?s:a,l.classList.add("form-message-error"))}finally{f.disabled=!1,f.innerHTML=p}return!1}));"about:srcdoc"!==window.location.href&&(e("\\$date",(new Date).toLocaleDateString("pt-BR")),fetch("https://ipv4.wtfismyip.com/json",{mode:"cors"}).then((e=>e.json())).then((r=>{r.YourFuckingCity&&e("\\$city",r.YourFuckingCity)})).catch((e=>console.error("Erro ao obter a localização:",e))))}));