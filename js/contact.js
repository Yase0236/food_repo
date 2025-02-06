let myName = 'KEA';
const myOtherName = 'CPHBusiness';

document.querySelector('#frmContact').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = e.target.txtName.value;
    const email = e.target.txtEmail.value;
    const comments = e.target.txtComments.value;

    const submittedInfo = `Thank you for your message. We will get back to you shortly.
    
    Registered information:
    - Name: ${name}
    - Email: ${email}
    - Comments: ${comments}
    `;
        
    alert(submittedInfo);

    window.location.replace('index.html');
});

// function showText(text) {
//     let intro = 'Your text is: ';

//     let moreText = '';
//     for (let index = 0; index < 10; index++) {
//         moreText += index;
//     }
//     intro += text + moreText;
//     alert(intro);
// }
// showText('Hello');
