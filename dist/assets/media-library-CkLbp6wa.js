document.addEventListener("DOMContentLoaded",function(){document.body.addEventListener("click",function(n){if(n.target&&n.target.id==="generate-alt-text-button"){let o=n.target.getAttribute("data-post-id"),a=n.target,t=document.getElementById("loading-spinner");a.disabled=!0,a.textContent="Generazione in corso...",t&&(t.style.display="inline-block",t.classList.add("is-active"));let r=AATXT.altTextNonce;fetch(ajaxurl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"action=generate_alt_text&nonce="+r+"&post_id="+o}).then(e=>e.json()).then(e=>{if(e.success){let i=document.querySelector(".attachment-info .setting.alt-text textarea");if(i){i.value=e.data.alt_text;let l=new Event("change",{bubbles:!0,cancelable:!0});i.dispatchEvent(l),wp&&wp.media&&wp.media.frame&&wp.media.frame.content&&wp.media.frame.content.get&&wp.media.frame.content.get().save()}else{let l=document.getElementById("attachment_alt");l&&(l.value=e.data.alt_text)}}else console.error("Error generating Alt Text",e)}).catch(e=>{console.error("Error during AJAX Request:",e)}).finally(()=>{a.disabled=!1,a.textContent="Generate Alt Text",t&&(t.style.display="none",t.classList.remove("is-active"))})}})});
