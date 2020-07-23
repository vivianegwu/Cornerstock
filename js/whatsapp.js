const sendMessage = async(sellerPhone, text)=>{
    let url = `https://api.whatsapp.com/send?phone=${sellerPhone}&text=${text}`;
    window.location = url;
}

const chatHandlers =()=>{
    let chat = document.querySelector('#whatsapp');

    chat.style.cursor = 'pointer';
    chat.onclick = function() {
        sendMessage(+2348034791103, 'Cornerstock I need money')
    };
}