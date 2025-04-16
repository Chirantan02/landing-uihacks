'use client';

import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

interface SocialButtonProps {
  provider: 'google' | 'shopify';
  onClick: () => void;
  isLoading?: boolean;
}

const PROVIDER_ICONS = {
  google: (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="currentColor"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="currentColor"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="currentColor"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  ),
  shopify: (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.273-1.439-1.411c-.045-.037-.075-.058-.121-.074l-.914 21.104h.023zm-11.25-11.37l-.837 2.517s-.146.094-.399.094c-.25 0-3.412 0-3.412 0-.707 0-.791-.498-.752-.622.578-1.435 1.428-3.538 1.428-3.538.02-.052.034-.104.051-.157.086-.276.144-.475.144-.475l2.155-6.114c.066-.183.131-.339.207-.339.077 0 .131.156.131.156l1.284 7.837v.641zm.707-8.1s-.392-.391-1.069-.391c-.677 0-1.285.099-1.285.099s-1.095 3.384-1.21 3.751c-.116.367-.192.589-.192.589l2.287 1.692 1.469-5.74zm-2.104 7.599s.989.729 1.468 1.083c.479.354 1.285.964 1.285.964l-2.753-2.047zm5.547 5.428c-.183-.013-1.946-.129-1.946-.129s-1.291-1.273-1.439-1.411c-.037-.039-.075-.058-.115-.071 0 0-.419 9.645-.471 10.752l7.216-1.561c-.001 0-2.603-17.613-2.625-17.73-.018-.116-.114-.192-.211-.192s-1.945-.138-1.945-.138-1.274-1.273-1.438-1.411c-.038-.039-.075-.058-.115-.071l-.911 11.962zm8.3-4.483c-.183-.013-.392-.026-.615-.026-1.508 0-2.234.377-2.234.377s-.837-1.137-1.833-1.137c-1.508 0-2.366 1.888-2.366 1.888s-1.201.026-1.799.065c-.602.039-1.018.091-1.018.091s-.759-1.862-2.08-1.862c-.981 0-1.659.68-1.659.68l.065-2.042s1.374-2.951 4.082-2.951c.981 0 1.751.562 1.751.562s.837-.523 2.248-.523c2.417 0 3.412 1.835 3.412 1.835s.957-.274 1.799-.274c1.361 0 1.881.901 1.881.901s.185 2.389.366 2.416z"
      />
    </svg>
  ),
};

const PROVIDER_COLORS = {
  google: 'hover:bg-gray-100 border-gray-300',
  shopify: 'hover:bg-[#96bf48]/10 border-[#96bf48]',
};

const PROVIDER_TEXT = {
  google: 'Continue with Google',
  shopify: 'Continue with Shopify',
};

export function SocialButton({ provider, onClick, isLoading }: SocialButtonProps) {
  return (
    <Button
      type="button"
      variant="outline"
      className={`w-full flex items-center justify-center gap-3 ${PROVIDER_COLORS[provider]}`}
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <LoadingSpinner size="sm" />
      ) : (
        PROVIDER_ICONS[provider]
      )}
      {PROVIDER_TEXT[provider]}
    </Button>
  );
} 