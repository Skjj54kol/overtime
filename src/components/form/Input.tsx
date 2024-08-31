'use client'

import clsx from 'clsx';

import {
    FieldErrors,
    FieldValues,
    UseFormRegister
} from 'react-hook-form';

interface InputProps {
    label: string;
    id: string;
    type?: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors,
    disabled?: boolean,
    showLabel: boolean,
    value?: string,
    onChange?: (id: string) => void
}

const Input: React.FC<InputProps> = ({
    label,
    id,
    type,
    required,
    errors,
    register,
    disabled,
    value,
    showLabel,
    onChange
}) => {
    return (
        <div>
            <label className={`block text-sm font-medium leading-6 text-white ${showLabel ? '' : 'hidden'}`} htmlFor={id}>{label}</label>
            <div>
                <input 
                    value={value} 
                    id={id}  
                    type={type} 
                    placeholder={label}  
                    disabled={disabled} 
                    autoComplete={id} 
                    {...register(id)}
                    className={clsx(`w-full rounded-lg border-[1.5px] border-stroke bg-white px-5 py-3 text-black outline-none transition`,
                    errors[id]
                )} />
            </div>

        </div>
    );
}

export default Input;