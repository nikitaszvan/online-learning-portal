import { useEffect, useState } from 'react';
import { useStore } from 'react-redux';

const useActionSubscription = (actionType) => {
  const store = useStore();
  const [actionPayload, setActionPayload] = useState(null);

  useEffect(() => {
    const handleStoreChange = () => {
      const action = store.getState().lastAction;
      if (action && action.type === actionType) {
        setActionPayload(action.payload);
      }
    };

    const unsubscribe = store.subscribe(handleStoreChange);

    return () => unsubscribe();
  }, [store, actionType]);

  return actionPayload;
};

export default useActionSubscription;
