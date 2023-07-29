let next_buttons=document.getElementsByClassName('carroussel_3d_next')

for(let i=0;i<next_buttons.length;i++) {
    let next_button=next_buttons[i];
    next_button.onclick=()=>{
        let sibling=next_button.nextElementSibling;
        let n=100;
        while(!sibling.classList.contains("carroussel_3d_pack")&& n>0){
            n--;
            sibling=sibling.nextElementSibling;
         }
         sibling=sibling.firstElementChild;
         let third_passed=false;
         while(!third_passed&&sibling){
            if(sibling.classList.contains("first")){
                first_passed=true;
                sibling.classList.remove("first");
                sibling.classList.add("left");
            }else
             if(sibling.classList.contains("second")){
                sibling.classList.remove("second");
                sibling.classList.add("first");
            }else
             if(sibling.classList.contains("third")){
                sibling.classList.remove("third");
                sibling.classList.add("second");
            }else
             if(sibling.classList.contains("right") && !third_passed){
                third_passed=true;
                sibling.classList.remove("right");
                sibling.classList.add("third");
             }
            sibling=sibling.nextElementSibling;
         }
    }
}

 let previous_buttons=document.getElementsByClassName('carroussel_3d_previous')
 
for(let i=0;i<previous_buttons.length;i++) {
    let previous_button=previous_buttons[i];
    previous_button.onclick=()=>{
        let sibling=previous_button.nextElementSibling;
        let n=100;
        while(!sibling.classList.contains("carroussel_3d_pack")&& n>0){
            n--;
            sibling=sibling.nextElementSibling;
         }
         sibling=sibling.lastElementChild;
         let first_passed=false;
         let third_passed=false;
         while(!first_passed&&sibling){
            if(sibling.classList.contains("first")){
                sibling.classList.remove("first");
                sibling.classList.add("second");
            }else
             if(sibling.classList.contains("second")){
                sibling.classList.remove("second");
                sibling.classList.add("third");
            }else
             if(sibling.classList.contains("third")){
                third_passed=true;
                sibling.classList.remove("third");
                sibling.classList.add("right");
            }else
             if(sibling.classList.contains("left")){
                first_passed=true;
                sibling.classList.remove("left");
                sibling.classList.add("first");
             }
            sibling=sibling.previousElementSibling;
         }
    }
}