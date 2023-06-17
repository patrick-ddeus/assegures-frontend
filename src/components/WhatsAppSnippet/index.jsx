import React, { useState, useEffect } from 'react';
import { IoLogoWhatsapp, IoCloseOutline } from "react-icons/io5";
import background from "../../assets/img/background.jpg";
import ContactsApi from "../../service/contacts";
import { Container, WhatsAppContainer, WhatsAppLink, Contacts, ContactCard, ContactInfo } from './styles';


const WhatsAppSnippet = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [contacts, setContacts] = useState(null);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await ContactsApi.getContacts();
                setContacts(response);
            } catch (error) {
                console.error(error.message);
            }
        };
        fetchContacts();
    }, []);

    return (
        <>
            <Container onClick={handleToggle} isOpen={isOpen}>
                <IoLogoWhatsapp className={`whatsapp-icon`} />
                <IoCloseOutline className={`close-icon`} />
            </Container>
            <WhatsAppContainer isOpen={isOpen}>
                <img src={background} alt="" />
                <p className='title'>Olá! Estamos aqui para te ajudar.</p>
                <Contacts>
                    {contacts?.map((contact) => (
                        <ContactCard>
                            <ContactInfo>
                                <img src={contact.avatar} alt="" />
                                <div>
                                    <span>{contact.name}</span>
                                    <span>{contact.role}</span>
                                </div>
                            </ContactInfo>
                            <WhatsAppLink href={`https://wa.me/${contact.phone}`} target="_blank">
                                <IoLogoWhatsapp />
                                <span>WhatsApp</span>
                            </WhatsAppLink>
                        </ContactCard>
                    ))}
                </Contacts>
            </WhatsAppContainer>
        </>
    );
};

export default WhatsAppSnippet;
