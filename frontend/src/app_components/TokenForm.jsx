import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

// Define the form schema
const formSchema = z.object({
  useraddress: z.string().min(2, {
    message: 'User address must be at least 2 characters.',
  }),
  tokenname: z.string().min(8, {
    message: 'Token name must be at least 8 characters.',
  }),
  tokensymbol: z.string().min(2, {
    message: 'Token symbol must be at least 2 characters.',
  }),
  nofotokens: z.string().min(1, {
    message: 'Number of tokens must be entered.',
  }),
});

function TokenForm() {
  // Create the form using useForm
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      useraddress: '',
      tokenname: '',
      tokensymbol: '',
      nofotokens: '',
    },
  });

  const onSubmit = (values) => {
    console.log('Submitting form with values:', values);
  };

  return (
    <div className="min-w-[50vw]  rounded-md p-12  bg-[#fff] bg-opacity-45 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)]">
      <div className="text-2xl font-faustina  w-full  flex items-center justify-center">
        <p>Mint Your Tokens</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="useraddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>User Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="0x4e....2ew"
                    className="min-w-[90%]"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is the user Metamask address.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tokenname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Token Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter token name"
                    className="min-w-[90%]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tokensymbol"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Token Symbol</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter token symbol"
                    className="min-w-[90%]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nofotokens"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Tokens</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter number of tokens"
                    type="number"
                    className="min-w-[90%]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Create Tokens</Button>
        </form>
      </Form>
    </div>
  );
}

export default TokenForm;
