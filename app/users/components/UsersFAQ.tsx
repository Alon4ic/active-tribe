'use client';
import React, { useEffect, useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from '@/components/ui/accordion';
import faq from '@/constants/faq';

export default function FAQ() {
    const leftColumnData = faq.slice(
        0,
        Math.ceil(faq.length / 2)
    );
    const rightColumnData = faq.slice(
        Math.ceil(faq.length / 2)
    );

    // Создаем массив для малых экранов в нужной последовательности
    const smallScreenData = [];
    const maxLength = Math.max(leftColumnData.length, rightColumnData.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < leftColumnData.length) {
            smallScreenData.push(leftColumnData[i]);
        }
        if (i < rightColumnData.length) {
            smallScreenData.push(rightColumnData[i]);
        }
    }

    // Состояние для определения ширины экрана
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        // Проверка ширины экрана только на клиенте
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1024);
        };

        // Инициализация
        handleResize();

        // Добавление обработчика событий
        window.addEventListener('resize', handleResize);

        // Очистка обработчика при размонтировании
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="max-w-[1216px] lg:mx-auto mx-6 lg:pt-[100px] pt-[50px] lg:pb-[142px] pb-[50px]">
            <div className="text-center mb-[60px]">
                <h2 className="uppercase text-baseText lg:text-[50px] phone:text-[40px] text-[30px] mb-[25px] font-bold phone:leading-[62px] leading-[45px]">
                    <span className="text-[#88816E]">Frequently</span> asked
                    questions
                </h2>
                <p className="font-normal text-[#2F2D3B] text-lg leading-[28px]">
                    We have put together some commonly asked questions
                </p>
            </div>
            {isSmallScreen ? (
                <div>
                    <Accordion type="single" collapsible>
                        {smallScreenData.map((item) => (
                            <AccordionItem
                                className="bg-white rounded-[10px] px-[25px] py-[26px] mb-5"
                                key={item.id}
                                value={item.id}
                            >
                                <AccordionTrigger className="text-lg font-semibod leading-7 text-baseText">
                                    {item.title}
                                </AccordionTrigger>
                                <AccordionContent className="text-base font-normal leading-7 text-baseText">
                                    {Array.isArray(item.content)
                                        ? item.content.map(
                                              (contentItem, idx) => (
                                                  <div
                                                      key={`content-${item.id}-${idx}`}
                                                  >
                                                      {contentItem}
                                                  </div>
                                              )
                                          )
                                        : item.content}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Left part */}
                    <div className="overflow-hidden mb-6">
                        <Accordion type="single" collapsible>
                            {leftColumnData.map((item, index) => (
                                <AccordionItem
                                    className="bg-white rounded-[10px] px-[25px] py-[26px] mb-5"
                                    key={item.id || `small-${index}`} // Уникальный ключ
                                    value={item.id || `small-${index}`}
                                >
                                    <AccordionTrigger>
                                        {item.title}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-base font-normal leading-7 text-baseText">
                                        {Array.isArray(item.content)
                                            ? item.content.map(
                                                  (contentItem, idx) => (
                                                      <div
                                                          key={`content-${item.id}-${idx}`}
                                                      >
                                                          {contentItem}
                                                      </div>
                                                  )
                                              )
                                            : item.content}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    {/* Правая колонка */}
                    <div className="overflow-hidden">
                        <Accordion type="single" collapsible>
                            {rightColumnData.map((item, index) => (
                                <AccordionItem
                                    className="bg-white rounded-[10px] px-[25px] py-[26px] mb-5"
                                    key={item.id || `small-${index}`} // Уникальный ключ
                                    value={item.id || `small-${index}`}
                                >
                                    <AccordionTrigger>
                                        {item.title}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-base font-normal leading-7 text-baseText">
                                        {Array.isArray(item.content)
                                            ? item.content.map(
                                                  (contentItem, idx) => (
                                                      <div
                                                          key={`content-${item.id}-${idx}`}
                                                      >
                                                          {contentItem}
                                                      </div>
                                                  )
                                              )
                                            : item.content}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            )}
        </div>
    );
}
