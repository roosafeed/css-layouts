let x = 0,
    lWidth = 0;

document.addEventListener('DOMContentLoaded', () => {
    const dragger = document.querySelector('.dragger'),
        drag_cont = document.querySelector('.drag-cont'),
        box_to_resize = document.querySelector('.drag-cont > div:first-of-type');

    dragger.style.height = drag_cont.getBoundingClientRect().height + 'px'; 
    dragger.title = "Drag to resize";
    
    function mouseDownHandler(e) {
        x = e.clientX;        
        lWidth = box_to_resize.getBoundingClientRect().width; 

        box_to_resize.style.userSelect = 'none';
        box_to_resize.style.pointerEvents = 'none';

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);

        console.log("md: " + x);
    }
    
    function mouseMoveHandler(e) {
        console.log("mv: " + e.clientX);

        const dx = e.clientX - x;        

        const newWidth = (((lWidth + dx) * 100) / drag_cont.getBoundingClientRect().width);
        box_to_resize.style.width = newWidth + '%';

        dragger.style.height = drag_cont.getBoundingClientRect().height + 'px'; 
    }
    
    function mouseUpHandler(e) {
        x = e.clientX;
        
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);

        box_to_resize.style.removeProperty('user-select');
        box_to_resize.style.removeProperty('pointer-events');
    }

    dragger.addEventListener('mousedown', mouseDownHandler);
});