import styled from 'styled-components';

export const Container = styled.div`
    overflow: unset;
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background-color: rgb(18, 140, 126);
    display: flex;
    -moz-box-align: center;
    align-items: center;
    -moz-box-pack: center;
    justify-content: center;
    color: white;
    font-size: 35px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.2) -1px 1px 5px;
    transition: box-shadow 0.5s ease 0s, transform 0.2s ease 0s;
    will-change: box-shadow, transform;
    z-index: 9999;

    .whatsapp-icon {
        position:absolute;
        transition: all 0.3s ease;
        transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
        opacity: ${({ isOpen }) => (!isOpen ? '1' : '0')};
    }

    .close-icon {
        transition: all 0.3s ease;
        position:absolute;
        opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
        transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
    }
    
`;

export const WhatsAppContainer = styled.div`
    font-family:"Poppins", sans-serif;
    z-index: 9999;
    position: fixed;
    width: 370px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.2) -1px 1px 5px;
    bottom: 105px;
    right: 45px;
    overflow: hidden;
    max-height: 65%;
    transition: transform 0.4s ease 0s, visibility 0.4s ease 0s, opacity 0.2s ease 0s;
    will-change: transform, visibility, opacity;
    
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0px)' : 'translateY(10%)')};
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    
    img{
        width:100%;
        height:400px;
        object-fit: cover;
        object-position: center bottom;
        border-top-left-radius:15px;
        border-top-right-radius:15px;
    }

    &::before {
        content:'';
        width:100%;
        height:150px;
        background-color:#3e587c;
        position:absolute;
        top:0;
        left:0;
    }

    .title{
        position: absolute;
        font-size: 16px;
        top:0;
        font-weight: 300;
        color: rgb(255, 255, 255);
        padding: 25px 30px 12.5px;
    }
`;

export const Contacts = styled.div`
    position: absolute;
    top:60px;
    max-height:calc(400px - 60px);
    width:100%;
    padding:0 30px;
    display:flex;
    flex-direction:column;
    gap:20px;
`;

export const ContactCard = styled.div`
  width: 100%;
  height:150px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.11) 0px 0px 14px 0px;
  background-color: rgb(255, 255, 255);
  padding: 15px 20px;
`;

export const ContactInfo = styled.div`
    display:flex;
    align-items:center;
    gap:15px;
    width:100%;
    position: relative;

    &::after{
        content: '';
        width:115%;
        left:-20px;
        height:1px;
        background-color:#e2e4e8cc;
        position:absolute;
        bottom:-10px;
    }

    img{
        width:60px;
        height:60px;
        border-radius:50%;
    }

    div{
        display:flex;
        flex-direction:column;
        gap:5px;
        font-size:16px;

        span:nth-child(1){
            color:#3e587c;
            font-weight:600;
        }

        span:nth-child(2){
            color: rgb(62, 88, 124);
            opacity: 0.54;
            font-weight: 300;
        }
    }
`;

export const WhatsAppLink = styled.a`
    width:100%;
    height: 32px;
    padding: 5px 15px;
    margin-top:25px;
    font-size: 14px;
    gap:5px;
    border-radius: 2px;
    display: flex;
    -moz-box-align: center;
    align-items: center;
    -moz-box-pack: center;
    justify-content: center;
    white-space: nowrap;
    cursor: pointer;
    transition: background-color 0.4s ease 0s;
    will-change: background-color;
    color: rgb(255, 255, 255);
    border: 1px solid rgb(18, 140, 126);
    background-color: rgb(18, 140, 126);

    span{
        font-weight:300;
    }

    svg{
        font-size:16px;
    }
`;