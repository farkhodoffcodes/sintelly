import React, { useState, useEffect, useRef } from 'react';
import { Send, Mic, ChevronLeft, MoreVertical, Volume2, Image as ImageIcon } from 'lucide-react';
import { Message } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

interface ChatInterfaceProps {
  onBack: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ onBack }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi Emma! I'm Sintelly. Emotional Intelligence (EI) is the ability to understand, manage, and express emotions in healthy ways. How are you feeling right now?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await sendMessageToGemini(input);

    const aiMsg: Message = {
      id: (Date.now() + 1).toString(),
      text: responseText,
      sender: 'ai',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, aiMsg]);
    setIsLoading(false);
  };

  return (
    <div className="h-full flex flex-col bg-[#FDFDFD]">
      {/* Header */}
      <div className="px-6 pt-12 pb-4 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-10 border-b border-gray-100">
        <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full">
          <ChevronLeft className="text-gray-800" />
        </button>
        <div className="flex flex-col items-center">
          <span className="font-semibold text-lg text-gray-800">Chat</span>
          <span className="text-xs text-green-500 flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Online
          </span>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <MoreVertical className="text-gray-800" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6 no-scrollbar pb-32">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex max-w-[85%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'} items-end gap-2`}>
              
              {msg.sender === 'ai' && (
                <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Sintelly" alt="AI" className="w-full h-full" />
                </div>
              )}

              <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                msg.sender === 'user' 
                  ? 'bg-gray-900 text-white rounded-br-none' 
                  : 'bg-white border border-gray-100 text-gray-700 rounded-bl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
           <div className="flex justify-start">
             <div className="flex flex-row items-end gap-2">
               <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                  <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Sintelly" alt="AI" className="w-6 h-6" />
               </div>
               <div className="bg-white border border-gray-100 p-4 rounded-2xl rounded-bl-none flex gap-1">
                 <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                 <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                 <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
               </div>
             </div>
           </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="fixed bottom-0 left-0 w-full bg-white p-4 pb-8 border-t border-gray-100">
        <div className="max-w-md mx-auto flex items-center gap-3">
          <button className="p-3 bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200 transition-colors">
            <ImageIcon size={20} />
          </button>
          
          <div className="flex-1 bg-gray-50 rounded-full px-4 py-2 flex items-center border border-gray-200 focus-within:border-violet-400 transition-colors">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..." 
              className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm h-10"
            />
            <button className="p-2 text-gray-400 hover:text-violet-600">
               <Volume2 size={18} />
            </button>
          </div>

          <button 
            onClick={handleSend}
            className={`p-4 rounded-full text-white shadow-lg transition-transform active:scale-95 ${input.trim() ? 'bg-violet-600 hover:bg-violet-700' : 'bg-gray-300 cursor-not-allowed'}`}
            disabled={!input.trim()}
          >
             {input.trim() ? <Send size={20} /> : <Mic size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;