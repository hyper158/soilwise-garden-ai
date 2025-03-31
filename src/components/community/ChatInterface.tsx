
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Bot, User, Send, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! I\'m SoilWise AI Assistant. I can help with soil analysis, crop recommendations, and gardening tips. How can I assist you today?',
      sender: 'ai',
      timestamp: new Date(Date.now() - 1000 * 60 * 5)
    }
  ]);
  
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: newMessage,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages([...messages, userMessage]);
    setNewMessage('');
    setIsTyping(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponses = [
        "Based on your soil analysis, I recommend adding compost to improve organic matter content.",
        "Your soil pH is slightly acidic. Consider adding lime to raise the pH for better nutrient availability.",
        "For your garden conditions, tomatoes, peppers, and basil would be excellent choices this season.",
        "Given your soil moisture levels, I suggest watering deeply twice a week rather than daily shallow watering.",
        "The nutrient analysis shows low phosphorus. Consider adding bone meal or rock phosphate to your soil."
      ];
      
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: randomResponse,
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prevMessages => [...prevMessages, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <Card className="h-[600px] flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <Bot className="h-5 w-5 text-soil-green" />
          SoilWise AI Assistant
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-grow p-0">
        <ScrollArea className="h-[470px] p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`flex max-w-[80%] ${
                    message.sender === 'user'
                      ? 'flex-row-reverse'
                      : 'flex-row'
                  }`}
                >
                  <Avatar className={`h-8 w-8 ${message.sender === 'user' ? 'ml-2' : 'mr-2'}`}>
                    {message.sender === 'ai' ? (
                      <>
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          <Sparkles className="h-4 w-4" />
                        </AvatarFallback>
                      </>
                    ) : (
                      <>
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback className="bg-secondary text-secondary-foreground">
                          <User className="h-4 w-4" />
                        </AvatarFallback>
                      </>
                    )}
                  </Avatar>
                  
                  <div>
                    <div
                      className={`rounded-lg p-3 ${
                        message.sender === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 px-1">
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex max-w-[80%] flex-row">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      <Sparkles className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <div className="rounded-lg p-3 bg-muted">
                      <div className="flex space-x-1">
                        <div className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-pulse" />
                        <div className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-pulse delay-150" />
                        <div className="h-2 w-2 rounded-full bg-muted-foreground/40 animate-pulse delay-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
      
      <CardFooter className="pt-2">
        <form
          className="flex w-full items-center space-x-2"
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
        >
          <Input
            type="text"
            placeholder="Ask about soil, crops, or gardening..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
};

export default ChatInterface;
