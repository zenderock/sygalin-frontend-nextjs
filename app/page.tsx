'use client'

import { useExampleStore } from '@/lib/stores/example-store'
import { LoadingSkeleton } from '@/components/ui/loading-skeleton'
import { PostsDemo } from '@/components/posts-demo'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { toast } from 'sonner'
import { useQueryState } from 'nuqs'
import { useState } from 'react'

export default function Home() {
  const { count, isLoading, increment, decrement, setLoading, reset } = useExampleStore()
  const [demo] = useQueryState('demo')
  const [activeTab, setActiveTab] = useState<'demo' | 'api'>('demo')

  const handleAsyncAction = async () => {
    setLoading(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setLoading(false)
    toast.success('Action terminée avec succès!')
  }

  return (
    <div className="min-h-screen p-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Sygalin
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
        Application d'entreprise moderne avec Next.js
        </p>
      </div>

      <div className="flex justify-center">
        <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('demo')}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === 'demo'
                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Démo Packages
          </button>
          <button
            onClick={() => setActiveTab('api')}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === 'api'
                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Démo API
          </button>
        </div>
      </div>

      {activeTab === 'demo' ? (
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="border-purple-100 bg-gradient-to-br from-purple-50 to-blue-50 hover:shadow-none shadow-none">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-700">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-sm">Z</span>
                </div>
                Gestion d'état avec Zustand
              </CardTitle>
              <CardDescription>
                Store global simple et performant
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-2xl shadow-sm border border-purple-100">
                  <span className="text-4xl font-bold text-purple-600">
                    {count}
                  </span>
                </div>
                
                <div className="flex gap-3 justify-center">
                  <Button
                    onClick={decrement}
                    variant="destructive"
                    size="lg"
                    disabled={isLoading}
                    className="w-16"
                  >
                    -
                  </Button>
                  <Button
                    onClick={increment}
                    variant="success"
                    size="lg"
                    disabled={isLoading}
                    className="w-16"
                  >
                    +
                  </Button>
                  <Button
                    onClick={reset}
                    variant="outline"
                    size="lg"
                    disabled={isLoading}
                  >
                    Reset
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 hover:shadow-none shadow-none">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-700">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">⚡</span>
                </div>
                Skeleton Loading
              </CardTitle>
              <CardDescription>
                Interface utilisateur élégante pendant les chargements
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="space-y-4">
                  <LoadingSkeleton rows={3} title avatar />
                  <div className="text-center">
                    <p className="text-sm text-blue-600 font-medium">
                      Chargement en cours...
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-4">
                  <p className="text-gray-600 mb-4">
                    Testez l'expérience de chargement avec skeleton
                  </p>
                  <Button
                    onClick={handleAsyncAction}
                    variant="primary"
                    size="lg"
                    className="w-full max-w-xs"
                  >
                    Déclencher Action Async
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {demo && (
            <Card className="border-green-100 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-bold text-sm">?</span>
                  </div>
                  Query Parameters avec Nuqs
                </CardTitle>
                <CardDescription>
                  Synchronisation automatique avec l'URL
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-white rounded-xl p-4 border border-green-100">
                  <p className="text-sm text-gray-600 mb-2">Paramètre détecté :</p>
                  <code className="bg-green-100 text-green-700 px-3 py-1 rounded-lg font-mono text-sm">
                    demo={demo}
                  </code>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      ) : (
        <div className="max-w-6xl mx-auto">
          <PostsDemo />
        </div>
      )}

      <div className="text-center text-sm text-gray-500 space-y-1">
        <p>✅ Zustand configuré</p>
        <p>✅ TanStack Query configuré</p>
        <p>✅ Nuqs configuré</p>
        <p>✅ Sonner configuré</p>
        <p>✅ Zod configuré</p>
        <p>✅ Skeleton loading configuré</p>
        <p>✅ API JSONPlaceholder intégrée</p>
      </div>
    </div>
  )
}
