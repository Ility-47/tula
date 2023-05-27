document.addEventListener('mousemove', e => {
 document.body.style.cssText = `--moveX: ${e.clientX}px; --moveY: ${e.clientY}px;`
}) 