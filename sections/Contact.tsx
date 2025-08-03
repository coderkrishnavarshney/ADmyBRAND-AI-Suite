'use client';
import { useForm } from 'react-hook-form';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

export const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data: any) => {
    alert('Thank you! We will reach out soon.\n' + JSON.stringify(data, null, 2));
    reset();
  };

  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="max-w-lg mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Get in touch</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input label="Name" register={register} required placeholder="Your name" />
          <Input label="Email" type="email" register={register} required placeholder="you@example.com" />
          <Input label="Message" type="text" register={register} required placeholder="Tell us about your needs" />
          <Button className="w-full" variant="secondary" type="submit">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};
