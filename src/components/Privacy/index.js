import React, { useEffect } from 'react';

export default function Privacy() {
  useEffect(() => {
    document.title = 'Política de Privacidade';
  }, []);

  return (
    <div style={{ color: 'black', marginLeft: 10 }}>
      <h1>Política de Privacidade do Aplicativo Cadê Meu Dinheiro?</h1>
      <h2>Atualizada em 20 de setembro de 2023</h2>
      <h3>1. Introdução</h3>
      <p>
        O aplicativo Cadê Meu Dinheiro? é um aplicativo de controle financeiro
        pessoal. Esta política de privacidade descreve como coletamos, usamos e
        compartilhamos suas informações pessoais ao usar o aplicativo.
      </p>
      <h3>2. Coleta de Informações</h3>
      <p>
        Ao usar o aplicativo Cadê Meu Dinheiro?, coletamos as seguintes
        informações pessoais:
      </p>
      <ul>
        <li>
          Dados de registro: Quando você se registra no aplicativo, coletamos
          seu nome, endereço de e-mail e senha.
        </li>
        <li>
          Dados de uso: Coletamos informações sobre como você usa o aplicativo,
          como as transações que você registra, as categorias que você usa e os
          relatórios que você gera.
        </li>
        <li>
          Dados de localização: Se você permitir, coletaremos sua localização
          para fornecer informações mais precisas sobre seus gastos.
        </li>
      </ul>
      <h3>3. Uso de Informações</h3>
      <p>Usamos suas informações pessoais para:</p>
      <ul>
        <li>Fornecer o aplicativo e suas funcionalidades.</li>
        <li>Melhorar o aplicativo e suas funcionalidades.</li>
        <li>Fornecer suporte ao cliente.</li>
        <li>Enviar comunicações promocionais.</li>
      </ul>
      <h3>4. Compartilhamento de Informações</h3>
      <p>
        Não compartilhamos suas informações pessoais com terceiros, exceto nas
        seguintes circunstâncias:
      </p>
      <ul>
        <li>
          Com nossos parceiros de negócios que nos ajudam a fornecer o
          aplicativo.
        </li>
        <li>
          Com terceiros que nos ajudam a cumprir a lei ou a proteger nossos
          direitos.
        </li>
        <li>Com seu consentimento.</li>
      </ul>
      <h3>5. Segurança de Informações</h3>
      <p>
        Aplicamos medidas de segurança para proteger suas informações pessoais,
        incluindo:
      </p>
      <ul>
        <li>Criptografia de dados.</li>
        <li>Acesso restrito a dados.</li>
        <li>Políticas de segurança de dados.</li>
      </ul>
      <h3>6. Acesso e Exclusão de Informações</h3>
      <p>
        Você pode acessar e excluir suas informações pessoais a qualquer
        momento. Para fazer isso, entre em contato conosco pelo e-mail
        contato@appcademeudinheiro.com.br.
      </p>
      <h3>7. Descontinuação do Aplicativo</h3>
      <p>
        Nos reservamos o direito de descontinuar o aplicativo a qualquer momento
        sem aviso prévio. Nesse caso, excluiremos todas as suas informações
        pessoais do aplicativo.
      </p>
      <h3>8. Manutenção</h3>
      <p>
        O aplicativo pode ficar fora do ar para manutenção periódica. Nesse
        caso, faremos o possível para minimizar o impacto na sua experiência.
      </p>
      <h3>9. Alterações na Política de Privacidade</h3>
      <p>
        Podemos atualizar esta política de privacidade periodicamente. A versão
        mais recente estará sempre disponível neste site.
      </p>
      <h3>10. Contato</h3>
      <p>
        Se você tiver alguma dúvida sobre esta política de privacidade, entre em
        contato conosco pelo e-mail contato@appcademeudinheiro.com.br.
      </p>
    </div>
  );
}
