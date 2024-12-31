'use client';
import React, { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useVisitedPages } from '@/hooks/useVisitedPages';
import { sendEmail } from '@/utils/send-email';
import type { FormData } from '@/types/form-data';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'react-hot-toast';
import { contactUsAction } from '@/app/actions';
import { getCaptchaToken } from '@/utils/captcha';
import ContactsLink from './ContactsLink';
import Image from 'next/image';
import { Checkbox } from './ui/checkbox';
const REQUIRED_PAGES = ['/terms', '/settings', '/privacy-policy'];

const Contact: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>();

    const checkVisitedPages = useVisitedPages();
    const [canAgree, setCanAgree] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        const allPagesVisited = checkVisitedPages(REQUIRED_PAGES);
        setCanAgree(allPagesVisited); // Debug information
    }, [checkVisitedPages]);

    // Добавленный код для переноса иконки reCAPTCHA
    useEffect(() => {
        const recaptchaBadge = document.querySelector(
            '.grecaptcha-badge'
        ) as HTMLElement | null;
        const formContainer = document.getElementById(
            'contact-form-container'
        ) as HTMLElement | null;

        if (recaptchaBadge && formContainer) {
            formContainer.style.position = 'relative'; // Убедитесь, что контейнер формы имеет относительное позиционирование
            recaptchaBadge.style.position = 'absolute';
            recaptchaBadge.style.bottom = '10px'; // Регулируйте позицию
            recaptchaBadge.style.right = '10px';
            formContainer.appendChild(recaptchaBadge); // Переместите иконку внутрь формы
        }
    }, []);

    const onSubmit = async (data: FormData) => {
        if (!canAgree) {
            toast.error(
                'Please visit Terms, Settings, and Privacy Policy pages before proceeding.'
            );
            return;
        }

        if (!isChecked) {
            toast.error(
                'You must agree to the terms before submitting the form.'
            );
            return;
        }

        const loadingToast = toast.loading('Sending message...');

        try {
            const token = await getCaptchaToken();
            const res = await contactUsAction(token, new FormData());

            if (!res.success) {
                throw new Error('Failed to process contactUsAction');
            }

            await sendEmail(data);

            toast.dismiss(loadingToast);
            toast.success('Message sent successfully!');
            reset();
        } catch (error) {
            console.error('Error during message submission:', error);

            toast.dismiss(loadingToast);
            toast.error('Failed to send message. Please try again.');
        }
    };

    return (
        <div className="max-w-[1210px] lg:mx-auto mx-5 lg:pt-[100px] pt-[50px]">
            <div className="text-center mb-[47px]">
                <h2 className="uppercase sm:text-[50px] text-[30px] sm:leading-[62px] leading-[45px] pb-[25px] text-[#0D0D0D] font-bold">
                    <span className="text-[#88816E]">Contact</span> Us
                </h2>
                <p className="text-lg leading-7 font-normal text-[#2F2D3B]">
                    Say something to start a chat with us!
                </p>
            </div>
            <div className="lg:flex lg:flex-row flex-col gap-[4.1%]">
                <div className="lg:w-[40.5%] w-[100%] rounded-[10px] bg-[#261F18] relative">
                    <ContactsLink />
                    <div className="absolute flex lg:top-[232px] top-[69px] lg:left-[233px] left-[623px] lg:w-[232px] lg:h-[331px] w-[293px] h-[418px]">
                        <Image src="/images/sportman.svg" alt="Sport" fill />
                    </div>
                </div>
                <div
                    className=" flex lg:justify-start justify-center lg:w-[55.6%] w-[100%] py-[50px] lg:px-[39px] px-auto border-[#E0E0E0] border rounded-[10px]"
                    style={{
                        boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.08)',
                    }}
                >
                    <form
                        className="relative w-[595px] sm:px-0 px-[19px]"
                        id="contact-form-container"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className=" sm:flex block justify-between items-center gap-[39px] mb-[45px]">
                            <div className="lg:w-[41%] sm:w-[100%] w-[87%] flex flex-col bg-transparent border-b border-[rgb(141,141,141)] placeholder-shown:bg-transparent sm:mb-0 mb-[39px]">
                                <Label
                                    className="text-xs text-[#8D8D8D] font-medium leading-5 mb-1"
                                    htmlFor="firstName"
                                >
                                    First Name
                                </Label>
                                <Input
                                    className="pb-[11px] border-b border-[#8D8D8D] bg-transparent border-none text-sm text-[#0D0D0D]
                                    focus:bg-transparent focus:border-none valid:bg-transparent 
                                    valid:border-t-none"
                                    id="firstName"
                                    type="text"
                                    placeholder="John"
                                    required
                                    {...register('firstName', {
                                        required: 'First name is required',
                                    })}
                                />
                                {errors.firstName && (
                                    <p className="text-red-500 mt-2">
                                        {errors.firstName.message}
                                    </p>
                                )}
                            </div>
                            <div className="lg:w-[41%] sm:w-[100%] w-[87%] flex flex-col bg-transparent border-b border-[rgb(141,141,141)] placeholder-shown:bg-transparent sm:mb-0 mb-[39px]">
                                <Label
                                    className="text-xs text-black font-medium leading-5 mb-1"
                                    htmlFor="lastName"
                                >
                                    Last Name
                                </Label>
                                <Input
                                    className="pb-[11px] bg-transparent border-none 
                                    focus:bg-transparent focus:border-none valid:bg-transparent 
                                    valid:border-t-none text-sm text-[#0D0D0D] placeholder:text-[#8D8D8D] leading-5"
                                    id="lastName"
                                    type="text"
                                    placeholder="Doe"
                                    required
                                    {...register('lastName', {
                                        required: 'Last name is required',
                                    })}
                                />
                                {errors.lastName && (
                                    <p className="text-red-500 mt-2">
                                        {errors.lastName.message}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="sm:flex block justify-between items-center gap-[39px] mb-[45px]">
                            <div className="lg:w-[41%] sm:w-[100%] w-[87%] flex flex-col bg-transparent border-b border-[rgb(141,141,141)] placeholder-shown:bg-transparent sm:mb-0 mb-[39px]">
                                <Label
                                    className="text-xs text-[#8D8D8D] font-medium leading-5 mb"
                                    htmlFor="email"
                                >
                                    Email
                                </Label>
                                <Input
                                    className="pb-[11px] border-b border-[#8D8D8D] bg-transparent border-none focus:bg-transparent focus:border-none text-[#0D0D0D] valid:bg-transparent 
                                    valid:border-t-none"
                                    id="email"
                                    type="email"
                                    placeholder="example@gmail.com"
                                    required
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                            message: 'Invalid email address',
                                        },
                                    })}
                                />
                                {errors.email && (
                                    <p className="text-red-500 mt-2">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>
                            <div className="lg:w-[41%] sm:w-[100%] w-[87%] flex flex-col bg-transparent border-b border-[rgb(141,141,141)] placeholder-shown:bg-transparent sm:mb-0 mb-[39px]">
                                <Label
                                    className="text-xs text-black font-medium leading-5 mb-1"
                                    htmlFor="phone"
                                >
                                    Phone Number
                                </Label>
                                <Input
                                    className="pb-[11px] text-[#0D0D0D] bg-transparent border-none 
                                    focus:bg-transparent focus:border-none valid:bg-transparent 
                                    valid:border-t-none placeholder:text-sm placeholder:text-[#8D8D8D] leading-5"
                                    id="phone"
                                    type="tel"
                                    placeholder="+1 (123) 456-7890"
                                    required
                                    {...register('phone', {
                                        required: 'Phone number is required',
                                        pattern: {
                                            value: /^\+?[1-9]\d{1,14}$/,
                                            message: 'Invalid phone number',
                                        },
                                    })}
                                />
                                {errors.phone && (
                                    <p className="text-red-500 mt-2">
                                        {errors.phone.message}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="mb-[45px] w-full flex flex-col bg-transparent border-b border-black placeholder-shown:bg-transparent">
                            <Label
                                className="text-xs text-[#8D8D8D] font-medium leading-5 mb-1"
                                htmlFor="message"
                            >
                                Message
                            </Label>
                            <Textarea
                                className="pb-[11px] text-[#0D0D0D] bg-transparent border-none 
                                    focus:bg-transparent focus:border-none valid:bg-transparent 
                                    valid:border-t-none placeholder:text-sm placeholder:text-[#8D8D8D] leading-5"
                                id="message"
                                rows={1}
                                placeholder="Write your message"
                                required
                                {...register('message', {
                                    required: 'Message is required',
                                    minLength: {
                                        value: 20,
                                        message:
                                            'Message must be at least 20 characters long',
                                    },
                                })}
                            />
                            {errors.message && (
                                <p className="text-red-500 mt-2">
                                    {errors.message.message}
                                </p>
                            )}
                        </div>
                        <div className="flex mb-[114px]">
                            <Checkbox
                                id="agree"
                                disabled={!canAgree}
                                checked={isChecked}
                                onChange={(checked) => setIsChecked(checked)}
                            />
                            <Label htmlFor="agree ">
                                I agree to the{' '}
                                <a href="/terms" className="underline">
                                    Terms
                                </a>
                                ,{' '}
                                <a href="/settings" className="underline">
                                    Settings
                                </a>
                                , and{' '}
                                <a href="/privacy-policy" className="underline">
                                    Privacy Policy
                                </a>
                                .
                            </Label>
                        </div>
                        <div className="w-full flex lg:justify-start justify-center contacts-button">
                            <button
                                type="submit"
                                className="contacts-btn text-sm tracking-tighter font-semibold cursor-style text-white bg-[#261F18] hover:bg-[#45392C] active:bg-[#261F18] active:shadow-custom transition-colors duration-300 py-[14px] px-[24px] rounded-[100px] leading-7"
                            >
                                Send us a message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
