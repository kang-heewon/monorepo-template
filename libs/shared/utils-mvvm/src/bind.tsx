'use client';

import { ComponentType, ReactElement, Suspense } from 'react';

export interface BindOptions {
  fallback?: ReactElement;
}

export function bind<P extends object, T extends object>(
  useHook: (props: P) => T,
  View: ComponentType<T> | ((props: T) => ReactElement),
  options?: BindOptions
): (props: P) => ReactElement {
  const BoundComponent = (props: P) => {
    const viewProps = useHook(props);
    return <View {...viewProps} />;
  };

  if (options?.fallback) {
    return (props: P) => (
      <Suspense fallback={options.fallback}>
        <BoundComponent {...props} />
      </Suspense>
    );
  }

  return BoundComponent;
}
