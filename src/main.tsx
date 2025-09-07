import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// PWA service worker registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const { registerSW } = await import('virtual:pwa-register')
      const { toast } = await import('@/hooks/use-toast')
      
      const updateSW = registerSW({
        onRegistered(registration) {
          console.log('SW Registered: ', registration)
          toast({
            title: "App is ready to work offline",
            description: "The app has been cached and is now available offline.",
          })
        },
        onRegisterError(error) {
          console.log('SW registration error', error)
        },
        onNeedRefresh() {
          // Show update available notification
          toast({
            title: "New Update Available",
            description: "A new version of the app is available. Click to update.",
            action: (
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    updateSW(true)
                    window.location.reload()
                  }}
                  className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm"
                >
                  Update Now
                </button>
                <button
                  onClick={() => {
                    // Dismiss the toast
                  }}
                  className="bg-secondary text-secondary-foreground px-3 py-1 rounded text-sm"
                >
                  Later
                </button>
              </div>
            ),
          })
        },
        onOfflineReady() {
          toast({
            title: "App ready to work offline",
            description: "The app is now cached and ready to work offline.",
          })
        },
      })
    } catch (error) {
      console.log('PWA registration failed:', error)
    }
  })
}

createRoot(document.getElementById("root")!).render(<App />);
