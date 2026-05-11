"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const inputClass = "w-full rounded-card border border-sky-mist bg-white px-4 py-3 text-sm outline-none transition focus:border-hope-orange";

export function ContactForm({ labels }: { labels: { name: string; email: string; phone: string; message: string; send: string; success: string } }) {
  const [sent, setSent] = useState(false);
  return (
    <form
      className="grid gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <input required className={inputClass} placeholder={labels.name} />
      <input required type="email" className={inputClass} placeholder={labels.email} />
      <input className={inputClass} placeholder={labels.phone} />
      <textarea required className={`${inputClass} min-h-36 resize-none`} placeholder={labels.message} />
      <Button type="submit">{labels.send}</Button>
      {sent ? <p className="text-sm font-semibold text-deep-blue">{labels.success}</p> : null}
    </form>
  );
}

export function VolunteerForm({
  labels,
}: {
  labels: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    availability: string;
    area: string;
    motivation: string;
    send: string;
    success: string;
  };
}) {
  const [sent, setSent] = useState(false);
  return (
    <form
      className="grid gap-4 md:grid-cols-2"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <input required className={inputClass} placeholder={labels.firstName} />
      <input required className={inputClass} placeholder={labels.lastName} />
      <input required type="email" className={inputClass} placeholder={labels.email} />
      <input required className={inputClass} placeholder={labels.phone} />
      <input required className={inputClass} placeholder={labels.city} />
      <select required className={inputClass} defaultValue="">
        <option value="" disabled>{labels.availability}</option>
        <option>Week-end</option>
        <option>En semaine</option>
        <option>Missions ponctuelles</option>
      </select>
      <select required className={inputClass} defaultValue="">
        <option value="" disabled>{labels.area}</option>
        <option>Logistique</option>
        <option>Communication</option>
        <option>Collecte de dons</option>
        <option>Animation enfants</option>
      </select>
      <textarea required className={`${inputClass} min-h-36 resize-none md:col-span-2`} placeholder={labels.motivation} />
      <Button type="submit" className="md:col-span-2">{labels.send}</Button>
      {sent ? <p className="text-sm font-semibold text-deep-blue md:col-span-2">{labels.success}</p> : null}
    </form>
  );
}
