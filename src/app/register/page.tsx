'use client';


import React from "react";



import {
  Form,
  Input,
  
  Button
} from "@heroui/react";
import { CalendarIcon, IdentificationIcon, PhoneIcon, UserIcon } from '@heroicons/react/20/solid';

type FormDataState = {
  name?: string;
  aadhaar?: string;
  mobile?: string;
  dob?: string;
  gender?: string;
};

export default function BestRegistrationForm() {
  const [formData, setFormData] = React.useState<FormDataState>({});
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [submitted, setSubmitted] = React.useState<FormDataState | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = (): Record<string, string> => {
    const newErrors: Record<string, string> = {};
    const { name, aadhaar, mobile, dob, gender } = formData;

    if (!name?.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!aadhaar?.trim()) {
      newErrors.aadhaar = "Please enter your Aadhaar number.";
    } else if (!/^\d{12}$/.test(aadhaar)) {
      newErrors.aadhaar = "Please enter a valid 12-digit Aadhaar number.";
    }

    if (!mobile?.trim()) {
      newErrors.mobile = "Please enter your mobile number.";
    } else if (!/^\d{10}$/.test(mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number.";
    }

    if (!dob?.trim()) {
      newErrors.dob = "Please enter your date of birth.";
    }

    if (!gender) {
      newErrors.gender = "Please select your gender.";
    }

    return newErrors;
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(formData);
  };

  const onReset = () => {
    setFormData({});
    setErrors({});
    setSubmitted(null);
  };

  return (
    <div className="dark:bg-neutral-900 min-h-screen flex justify-center items-center py-16 px-6 sm:px-12 lg:px-24 bg-gray-50 fade-in">
      <div className="dark:bg-neutral-800 bg-white rounded-xl shadow-2xl p-8 sm:p-12 max-w-md w-full slide-down">
        <h2 className="dark:text-white text-gray-800 text-3xl font-bold mb-8 text-center">
          Personal Information
        </h2>
        <Form
          className="space-y-6"
          validationErrors={errors}
          onSubmit={onSubmit}
          onReset={onReset}
        >
          <div>
            <label htmlFor="name" className="dark:text-neutral-300 block text-sm font-medium text-gray-700">
              Name
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                <UserIcon className="h-5 w-5 text-gray-400 dark:text-neutral-500" aria-hidden="true" />
              </div>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="dark:bg-neutral-700 dark:text-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="Full Name"
              />
            </div>
            {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="aadhaar" className="dark:text-neutral-300 block text-sm font-medium text-gray-700">
              Aadhaar Number
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                <IdentificationIcon className="h-5 w-5 text-gray-400 dark:text-neutral-500" aria-hidden="true" />
              </div>
              <Input
                type="text"
                id="aadhaar"
                name="aadhaar"
                value={formData.aadhaar}
                onChange={handleChange}
                className="dark:bg-neutral-700 dark:text-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="XXXX-XXXX-XXXX"
                maxLength={14}
              />
            </div>
            {errors.aadhaar && <p className="mt-1 text-red-500 text-sm">{errors.aadhaar}</p>}
          </div>

          <div>
            <label htmlFor="mobile" className="dark:text-neutral-300 block text-sm font-medium text-gray-700">
              Mobile Number
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                <PhoneIcon className="h-5 w-5 text-gray-400 dark:text-neutral-500" aria-hidden="true" />
              </div>
              <Input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="dark:bg-neutral-700 dark:text-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="10-digit number"
                maxLength={10}
              />
            </div>
            {errors.mobile && <p className="mt-1 text-red-500 text-sm">{errors.mobile}</p>}
          </div>

          <div>
            <label htmlFor="dob" className="dark:text-neutral-300 block text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                <CalendarIcon className="h-5 w-5 text-gray-400 dark:text-neutral-500" aria-hidden="true" />
              </div>
              <Input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="dark:bg-neutral-700 dark:text-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="YYYY-MM-DD"
              />
            </div>
            {errors.dob && <p className="mt-1 text-red-500 text-sm">{errors.dob}</p>}
          </div>

           

          <div className="mt-6">
            <Button
              type="submit"
              className="w-full py-3 px-4 font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
              color="primary"
            >
              Register
            </Button>
            <Button
              type="reset"
              variant="bordered"
              className="mt-3 w-full py-3 px-4 font-semibold rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-gray-700 dark:text-neutral-300 dark:border-neutral-700"
            >
              Reset
            </Button>
          </div>

          {submitted && (
            <div className="bg-gray-50 dark:bg-neutral-900 px-8 py-6 border-t dark:border-neutral-800 mt-6 rounded-md">
              <h3 className="dark:text-white text-gray-800 text-sm font-semibold mb-2">Submitted Data:</h3>
              <pre className="dark:bg-neutral-800 bg-gray-100 rounded p-3 overflow-auto text-xs dark:text-neutral-200">
                {JSON.stringify(submitted, null, 2)}
              </pre>
            </div>
          )}
        </Form>
      </div>
    </div>
  );
}