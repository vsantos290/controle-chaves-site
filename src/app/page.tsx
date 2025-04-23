import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function ControleChavesHome() {
  return (
    <main className="min-h-screen bg-gray-50 p-6 text-gray-800">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Controle total das chaves do seu condomínio em um clique!
        </h1>
        <p className="text-lg mb-6">
          Organize a portaria, evite perdas e tenha histórico completo de quem pegou o quê e quando.
        </p>
        <Button className="text-lg px-6 py-3">Teste grátis por 7 dias</Button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          {
            icon: "🔐",
            title: "Controle de chaves",
            desc: "Registre retiradas e devoluções com praticidade."
          },
          {
            icon: "📋",
            title: "Relatórios e histórico",
            desc: "Tenha o controle de tudo que acontece na portaria."
          },
          {
            icon: "👤",
            title: "Cadastro de usuários",
            desc: "Moradores, funcionários e visitantes organizados."
          },
          {
            icon: "🔔",
            title: "Alertas inteligentes",
            desc: "Notificações para chaves não devolvidas."
          }
        ].map((item, idx) => (
          <Card key={idx} className="text-center p-4">
            <CardContent>
              <div className="text-4xl mb-2">{item.icon}</div>
              <h3 className="font-semibold text-xl mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4">Para quem é?</h2>
        <p className="mb-6">Ideal para:</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
          {['Condomínios', 'Empresas', 'Escolas', 'Clubes', 'Portarias em geral'].map((item, idx) => (
            <span key={idx} className="bg-white border rounded-xl p-2 shadow">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4">Planos e Preços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { nome: "Gratuito", preco: "R$0", vantagens: ["1 usuário", "Acesso básico"] },
            { nome: "Básico", preco: "R$19/mês", vantagens: ["Até 3 usuários", "Histórico de 30 dias"] },
            { nome: "Pro", preco: "R$39/mês", vantagens: ["Usuários ilimitados", "Relatórios avançados", "Suporte prioritário"] },
          ].map((plano, idx) => (
            <Card key={idx} className="p-4 text-center">
              <CardContent>
                <h3 className="text-xl font-bold mb-2">{plano.nome}</h3>
                <p className="text-lg text-green-600 font-semibold mb-2">{plano.preco}</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {plano.vantagens.map((v, i) => <li key={i}>✔️ {v}</li>)}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-xl font-semibold mb-2">Fale com a gente</h2>
        <p className="mb-4 text-sm">Tire dúvidas, peça um orçamento ou agende uma demonstração.</p>
        <div className="max-w-md mx-auto flex flex-col gap-3">
          <Input placeholder="Seu nome" />
          <Input placeholder="Seu e-mail" />
          <Input placeholder="Mensagem" />
          <Button className="w-full">Enviar</Button>
        </div>
      </section>
    </main>
  );
}
