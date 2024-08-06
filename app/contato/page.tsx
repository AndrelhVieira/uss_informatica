"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import * as yup from "yup";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneFlip, FaWhatsapp } from "react-icons/fa6";

const CONTACT_ASSETS = [
  {
    title: "Para envio à Diretoria use:",
    type: "mail",
    value: "uss@ussinformatica.com.br",
  },
  {
    title: "Para envio ao suporte use:",
    type: "mail",
    value: "ti@ussinformatica.com.br",
  },
  {
    title: "Para envio ao financeiro use:",
    type: "mail",
    value: "financeiro@ussinformatica.com.br",
  },
  {
    type: "phone",
    value: "(41) 3057-5633",
    valueWithoutFormat: "+554130575633",
  },
  {
    type: "whatsapp",
    value: "(41) 991960387",
    valueWithoutFormat: "5541991960387",
  },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const schema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    email: yup.string().email("Email inválido").required("Email é obrigatório"),
    subject: yup.string().required("Assunto é obrigatório"),
    message: yup.string().required("Mensagem é obrigatória"),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await schema.validate(formData, { abortEarly: false });
      setErrors({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      emailjs
        .send(
          "service_voph276",
          "template_flpwroe",
          formData,
          "iX14xrBM6t909tX95"
        )
        .then(() => {
          alert("Email enviado com sucesso!");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        })
        .catch((error) => {
          console.error("Erro ao enviar email:", error);
          alert("Falha ao enviar o email. Por favor, tente novamente.");
        });
    } catch (validationErrors) {
      const newErrors = {
        name: "",
        email: "",
        subject: "",
        message: "",
      };
      validationErrors.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
    }
  };

  return (
    <section className="px-4 pb-16 md:px-24 lg:px-8 lg:pb-20">
      <div className="my-6">
        <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-background shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-secondary font-[sans-serif]">
          <div>
            <h1 className="text-3xl font-extrabold">Deixe sua mensagem</h1>
            <p className="text-sm text-gray-400 mt-3">
              Estamos aqui para ajudar! Se você tem alguma dúvida, precisa de um
              orçamento, ou quer saber mais sobre nossos serviços, preencha o
              formulário abaixo. Nossa equipe entrará em contato com você o mais
              rápido possível. Queremos ouvir você e encontrar a melhor solução
              para suas necessidades. Fale conosco hoje mesmo!
            </p>
            <div className="mt-12">
              <h2 className="text-lg font-extrabold">Emails</h2>
              <ul className="mt-3">
                {CONTACT_ASSETS.filter(
                  (contact) => contact.type === "mail"
                ).map((mail) => (
                  <li className="flex items-center mb-3" key={mail.value}>
                    <div className="bg-primary h-10 w-10 rounded-full flex items-center justify-center shrink-0 text-background text-2xl">
                      <MdOutlineEmail />
                    </div>
                    <a
                      target="blank"
                      href={`mailto:${mail.value}`}
                      className="text-secondary text-sm ml-3"
                    >
                      <small className="block">{mail.title}</small>
                      <strong>{mail.value}</strong>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <h2 className="text-lg font-extrabold">Telefones</h2>
              <ul className="mt-3">
                {CONTACT_ASSETS.filter(
                  (contact) => contact.type !== "mail"
                ).map((contact) => (
                  <li className="flex items-center mb-3" key={contact.value}>
                    <div className="bg-primary h-10 w-10 rounded-full flex items-center justify-center shrink-0 text-background text-2xl">
                      {contact.type === "phone" ? (
                        <FaPhoneFlip />
                      ) : (
                        <FaWhatsapp />
                      )}
                    </div>
                    <a
                      target="blank"
                      href={
                        contact.type === "phone"
                          ? `tel:${contact.valueWithoutFormat}`
                          : `https://api.whatsapp.com/send?phone=${contact.valueWithoutFormat}`
                      }
                      className="text-secondary text-sm ml-3"
                    >
                      <small className="block">
                        {contact.type === "phone" ? "Telefone" : "WhatsApp"}
                      </small>
                      <strong>{contact.value}</strong>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="ml-auto space-y-4 w-full">
            <div className="flex flex-col gap-2">
              <input
                type="text"
                name="name"
                placeholder="Nome"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-md py-2.5 px-4 border text-sm bg-transparent"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-md py-2.5 px-4 border text-sm bg-transparent"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                name="subject"
                placeholder="Assunto"
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-md py-2.5 px-4 border text-sm bg-transparent"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm">{errors.subject}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <textarea
                name="message"
                placeholder="Mensagem"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-md px-4 border text-sm pt-2.5 bg-transparent"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="text-white bg-secondary font-semibold rounded-md text-sm px-4 py-2.5 w-full"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
