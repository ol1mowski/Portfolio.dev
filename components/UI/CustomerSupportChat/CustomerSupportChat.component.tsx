'use client';

import React, { useState, useEffect, useRef } from 'react';
import s from './CustomerSupportChat.component.module.scss';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'support';
  timestamp: Date;
}

const CustomerSupportChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [hasNotification, setHasNotification] = useState(true);
  const [showPreview, setShowPreview] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Pokaż podgląd po 3 sekundach (tylko podgląd, przycisk jest cały czas)
    const timer = setTimeout(() => {
      setShowPreview(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Scroll do dołu gdy dodana nowa wiadomość lub gdy bot pisze
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleToggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setHasNotification(false);
      setShowPreview(false);
    }
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');

    // Pokaż animację pisania
    setIsTyping(true);

    // Automatyczna odpowiedź po 2 sekundach (wydłużone dla realizmu)
    setTimeout(() => {
      setIsTyping(false);
      const supportMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Dzięki za wiadomość! 👋 Chat jest jeszcze w budowie, ale już wkrótce będę mógł Ci pomóc. W międzyczasie zapraszam do kontaktu przez email: kontakt@oliwiermarkiewicz.pl',
        sender: 'support',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, supportMessage]);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Podgląd wiadomości */}
      {showPreview && !isOpen && (
        <div className={s.preview} onClick={handleToggleChat}>
          <div className={s.preview__content}>
            <div className={s.preview__avatar}>👋</div>
            <div className={s.preview__text}>
              <div className={s.preview__title}>Cześć! Potrzebujesz pomocy?</div>
              <div className={s.preview__message}>Jestem tutaj, żeby Ci pomóc</div>
            </div>
            <button
              className={s.preview__close}
              onClick={e => {
                e.stopPropagation();
                setShowPreview(false);
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Przycisk chatu - zawsze widoczny z ikonką czatu */}
      <button className={s.chatButton} onClick={handleToggleChat}>
        {hasNotification && !isOpen && <div className={s.chatButton__notification}>1</div>}
        <span className={s.chatButton__icon}>💬</span>
      </button>

      {/* Okno chatu */}
      {isOpen && (
        <div className={s.chatWindow}>
          <div className={s.chatWindow__header}>
            <div className={s.chatWindow__header__info}>
              <div className={s.chatWindow__header__avatar}>👤</div>
              <div className={s.chatWindow__header__details}>
                <div className={s.chatWindow__header__name}>Obsługa Klienta</div>
                <div className={s.chatWindow__header__status}>
                  {isTyping ? 'Pisze...' : 'Online'}
                </div>
              </div>
            </div>
            <button className={s.chatWindow__header__close} onClick={handleToggleChat}>
              ✕
            </button>
          </div>

          <div className={s.chatWindow__messages}>
            {messages.length === 0 && !isTyping && (
              <div className={s.chatWindow__welcome}>
                <div className={s.chatWindow__welcome__avatar}>👋</div>
                <div className={s.chatWindow__welcome__text}>Witaj! W czym mogę Ci pomóc?</div>
              </div>
            )}

            {messages.map(message => (
              <div
                key={message.id}
                className={`${s.message} ${message.sender === 'user' ? s.message__user : s.message__support}`}
              >
                <div className={s.message__bubble}>{message.text}</div>
                <div className={s.message__time}>
                  {message.timestamp.toLocaleTimeString('pl-PL', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </div>
              </div>
            ))}

            {/* Animacja pisania */}
            {isTyping && (
              <div className={`${s.message} ${s.message__support}`}>
                <div className={s.message__bubble}>
                  <div className={s.typingIndicator}>
                    <div className={s.typingIndicator__dot}></div>
                    <div className={s.typingIndicator__dot}></div>
                    <div className={s.typingIndicator__dot}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className={s.chatWindow__input}>
            <textarea
              value={newMessage}
              onChange={e => setNewMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Napisz wiadomość..."
              className={s.chatWindow__textarea}
              rows={1}
              disabled={isTyping}
            />
            <button
              onClick={handleSendMessage}
              className={s.chatWindow__send}
              disabled={!newMessage.trim() || isTyping}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomerSupportChat;
