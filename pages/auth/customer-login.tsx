import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuth } from '../../hooks/useAuth';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  remember: z.boolean().optional(),
});

type FormData = z.infer<typeof schema>;

export default function CustomerLogin() {
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await login(data.email, data.password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4">
      <h2 className="text-2xl mb-4">Customer Login</h2>
      <div className="mb-2">
        <input
          {...register('email')}
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div className="mb-2">
        <input
          type="password"
          {...register('password')}
          placeholder="Password"
          className="w-full p-2 border rounded"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
      </div>
      <div className="mb-2">
        <label className="inline-flex items-center">
          <input type="checkbox" {...register('remember')} className="mr-2" />
          Remember me
        </label>
      </div>
      <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded">
        Login
      </button>
    </form>
  );
}
