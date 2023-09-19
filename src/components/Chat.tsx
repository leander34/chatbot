/* eslint-disable react/no-unescaped-entities */
"use client";

import * as Card from "./ui/card";
import * as Avatar from "./ui/avatar";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useChat } from "ai/react";
import { ScrollArea } from "./ui/scroll-area";

export function Chat(props: any) {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });
  return (
    <Card.Card className="w-[440px]">
      <Card.CardHeader>
        <Card.CardTitle>Chat Ai</Card.CardTitle>
        <Card.CardDescription>
          Using Vercel SDK to create a chat bot.
        </Card.CardDescription>
      </Card.CardHeader>
      <Card.CardContent className="">
        <ScrollArea className="h-[600px] w-full pr-4">
          {messages.map((message) => {
            return (
              <>
                {message.role === "user" ? (
                  <div className="flex justify-end gap-3 text-slate-600 mt-4 mb-4">
                    <div>
                      <span className="flex justify-end font-bold text-sm text-slate-800">
                        Você:
                      </span>
                      <p className="text-sm tracking-tight leading-relaxed">
                        {message.content}
                      </p>
                    </div>
                    <Avatar.Avatar>
                      <Avatar.AvatarFallback>LS</Avatar.AvatarFallback>
                      <Avatar.AvatarImage src="https://github.com/leander34.png" />
                    </Avatar.Avatar>
                  </div>
                ) : (
                  <div className="flex gap-3 text-slate-600">
                    <Avatar.Avatar>
                      <Avatar.AvatarFallback>LS</Avatar.AvatarFallback>
                      <Avatar.AvatarImage src="https://github.com/rocketseat.png" />
                    </Avatar.Avatar>
                    <div>
                      <span className="font-bold text-sm text-slate-800">
                        IA:
                      </span>

                      <p className="text-sm tracking-tight leading-relaxed">
                        {message.content}
                      </p>
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </ScrollArea>
      </Card.CardContent>
      <Card.CardFooter>
        <form className="flex gap-2 w-full" onSubmit={handleSubmit}>
          <Input
            className=""
            placeholder="How can I help you?"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">send</Button>
        </form>
      </Card.CardFooter>
    </Card.Card>
  );
}
