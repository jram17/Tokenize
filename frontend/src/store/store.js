import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

const initialState = {
    address: null,
    hydrated: false,
};

export const AddressStore = create()(
    persist(
        immer((set) => ({
            ...initialState,
            setAddress: (address) => set({ address }),
            resetState: () => set(initialState),
            setHydrated: () => set({ hydrated: true }),
        })),
        {
            name: 'AddressData',
            onRehydrateStorage: () => (state, error) => {
                if (error) {
                    console.log('Persistence error:', error);
                } else {
                    state?.setHydrated();
                }
            },
        }
    )
);
