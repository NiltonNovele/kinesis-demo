import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { X, Send } from "lucide-react";

export const Newsletter = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "👋 Olá! Como posso ajudar-te hoje?" },
    { from: "bot", text: "❓ Algumas perguntas frequentes:" },
    { from: "bot", text: "• Como faço uma reserva?" },
    { from: "bot", text: "• Onde posso encontrar os horários?" },
    { from: "bot", text: "• Quais são os métodos de pagamento?" },
  ]);
  const [input, setInput] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Subscreveste a newsletter!");
  };

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
    // mock reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "🤖 Obrigado pela tua pergunta! Vamos responder em breve.",
        },
      ]);
    }, 1000);
  };

  return (
    <section id="newsletter">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Junta-te à nossa{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Newsletter
          </span>
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          Recebe novidades e conteúdos exclusivos no teu email.
        </p>

        <form
          className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="teuemail@exemplo.com"
            className="bg-muted/50 dark:bg-muted/80"
            aria-label="email"
          />
          <Button type="submit">Subscrever</Button>
        </form>

        <div className="flex justify-center mt-8">
          <Button variant="outline" onClick={() => setChatOpen(true)}>
            💬 Fala connosco
          </Button>
        </div>

        {chatOpen && (
          <div className="fixed bottom-6 right-6 bg-background shadow-lg border rounded-xl w-80 z-50 flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h4 className="font-semibold text-lg">Assistente Virtual</h4>
              <button onClick={() => setChatOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-2 text-sm max-h-96">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`${
                    msg.from === "bot"
                      ? "bg-muted text-muted-foreground"
                      : "bg-primary text-white ml-auto"
                  } px-3 py-2 rounded-xl max-w-[85%] w-fit`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <form
              className="flex items-center border-t p-2 gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escreve a tua mensagem..."
                className="flex-1"
              />
              <Button size="icon" type="submit">
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        )}
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
