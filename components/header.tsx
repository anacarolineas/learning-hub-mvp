"use client"

import { User, Target, Settings, LogOut, UserCircle, Rocket, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function Header() {
  const [userData, setUserData] = useState<any>(null)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const checkUserData = () => {
      const storedUserData = localStorage.getItem("userData")
      if (storedUserData) {
        try {
          const user = JSON.parse(storedUserData)
          if (user.isAuthenticated) {
            setUserData(user)
          } else {
            setUserData(null)
          }
        } catch (error) {
          setUserData(null)
        }
      } else {
        setUserData(null)
      }
    }

    checkUserData()

    // Listener para mudanças no localStorage (outras abas)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "userData") {
        checkUserData()
      }
    }

    // Listener para mudanças na mesma aba
    const handleStorageChangeLocal = () => {
      checkUserData()
    }

    window.addEventListener("storage", handleStorageChange)
    window.addEventListener("userDataChanged", handleStorageChangeLocal)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
      window.removeEventListener("userDataChanged", handleStorageChangeLocal)
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (!target.closest(".user-menu")) {
        setShowUserMenu(false)
      }
    }

    if (showUserMenu) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [showUserMenu])

  // Fechar menu mobile quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (!target.closest(".mobile-menu")) {
        setShowMobileMenu(false)
      }
    }

    if (showMobileMenu) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [showMobileMenu])

  const handleLogout = () => {
    localStorage.removeItem("userData")
    setShowUserMenu(false)
    setShowMobileMenu(false)
    setUserData(null)

    window.dispatchEvent(new Event("userDataChanged"))
    router.push("/login")
  }

  const handlePreferences = () => {
    setShowUserMenu(false)
    setShowMobileMenu(false)
    router.push("/preferencias")
  }

  const handleTrilhaXp = () => {
    setShowUserMenu(false)
    setShowMobileMenu(false)
    router.push("/ranking")
  }

  const handleProfile = () => {
    setShowUserMenu(false)
    setShowMobileMenu(false)
    router.push("/perfil")
  }

  const handleLoginRedirect = () => {
    router.push("/login")
  }

  return (
    <>
      <header className="border-b border-green-700 bg-[#063825] backdrop-blur supports-[backdrop-filter]:bg-[#063825] sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <Image
                src="/images/logo-text.png"
                alt="UpTrail Hub"
                width={130}
                height={40}
                className="h-8 md:h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {userData && (
              <Link
                href="/dashboard"
                className="text-white hover:text-green-200 transition-colors font-medium flex items-center space-x-1"
              >
                <Target className="w-4 h-4" />
                <span>Dashboard</span>
              </Link>
            )}
            <Link href="/trilhas" className="text-white hover:text-green-200 transition-colors font-medium">
              Trilhas
            </Link>
            <Link href="/mentoria" className="text-white hover:text-green-200 transition-colors font-medium">
              Mentorias
            </Link>
            <Link href="/empresas" className="text-white hover:text-green-200 transition-colors font-medium">
              Empresas
            </Link>
            {userData ? (
              <div className="relative user-menu">
                <Button
                  variant="ghost"
                  size="sm"
                  className="cursor-pointer text-white hover:text-green-200 hover:bg-white/10 p-2"
                  onClick={() => setShowUserMenu(!showUserMenu)}
                >
                  <User className="w-5 h-5" />
                </Button>
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border">
                    <div className="px-4 py-2 text-sm text-gray-700 border-b">
                      <p className="font-medium">{userData.email}</p>
                      <p className="text-xs text-gray-500">{userData.signature === "premium" ? "Premium" : "Free"}</p>
                    </div>
                    <button
                      onClick={handleProfile}
                      className="cursor-pointer block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                    >
                      <UserCircle className="w-4 h-4" />
                      <span>Meu Perfil</span>
                    </button>
                    <button
                      onClick={handleTrilhaXp}
                      className="cursor-pointer block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                    >
                      <Rocket className="w-4 h-4" />
                      <span>TrilhaXP</span>
                    </button>
                    <button
                      onClick={handlePreferences}
                      className="cursor-pointer block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                    >
                      <Settings className="w-4 h-4" />
                      <span>Preferências</span>
                    </button>
                    <button
                      onClick={handleLogout}
                      className="cursor-pointer block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sair</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLoginRedirect}
                className="text-white hover:text-green-200 transition-colors font-medium flex items-center space-x-1 hover:bg-white/10"
              >
                <User className="w-4 h-4" />
                <span>Acessar Hub</span>
              </Button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {userData && (
              <Button
                variant="ghost"
                size="sm"
                className="cursor-pointer text-white hover:text-green-200 hover:bg-white/10 p-2"
                onClick={() => setShowUserMenu(!showUserMenu)}
              >
                <User className="w-5 h-5" />
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              className="cursor-pointer text-white hover:text-green-200 hover:bg-white/10 p-2 mobile-menu"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile User Menu */}
        {userData && showUserMenu && (
          <div className="md:hidden border-t border-green-700 bg-[#063825] px-4 py-3">
            <div className="text-sm text-white border-b border-green-700 pb-2 mb-3">
              <p className="font-medium">{userData.email}</p>
              <p className="text-xs text-green-200">{userData.signature === "premium" ? "Premium" : "Free"}</p>
            </div>
            <div className="space-y-2">
              <button
                onClick={handleProfile}
                className="cursor-pointer block w-full text-left text-white hover:text-green-200 transition-colors flex items-center space-x-2 py-2"
              >
                <UserCircle className="w-4 h-4" />
                <span>Meu Perfil</span>
              </button>
              <button
                onClick={handleTrilhaXp}
                className="cursor-pointer block w-full text-left text-white hover:text-green-200 transition-colors flex items-center space-x-2 py-2"
              >
                <Rocket className="w-4 h-4" />
                <span>TrilhaXP</span>
              </button>
              <button
                onClick={handlePreferences}
                className="cursor-pointer block w-full text-left text-white hover:text-green-200 transition-colors flex items-center space-x-2 py-2"
              >
                <Settings className="w-4 h-4" />
                <span>Preferências</span>
              </button>
              <button
                onClick={handleLogout}
                className="cursor-pointer block w-full text-left text-white hover:text-green-200 transition-colors flex items-center space-x-2 py-2"
              >
                <LogOut className="w-4 h-4" />
                <span>Sair</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Navigation Menu */}
      {showMobileMenu && (
        <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setShowMobileMenu(false)}>
          <div 
            className="fixed right-0 top-0 h-full w-80 bg-[#063825] shadow-xl mobile-menu"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-green-700">
              <h2 className="text-white font-semibold">Menu</h2>
              <Button
                variant="ghost"
                size="sm"
                className="cursor-pointer text-white hover:text-green-200 hover:bg-white/10 p-2"
                onClick={() => setShowMobileMenu(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            <nav className="p-4 space-y-4">
              {userData && (
                <Link
                  href="/dashboard"
                  className="block text-white hover:text-green-200 transition-colors font-medium flex items-center space-x-2 py-2"
                  onClick={() => setShowMobileMenu(false)}
                >
                  <Target className="w-4 h-4" />
                  <span>Dashboard</span>
                </Link>
              )}
              <Link
                href="/trilhas"
                className="block text-white hover:text-green-200 transition-colors font-medium py-2"
                onClick={() => setShowMobileMenu(false)}
              >
                Trilhas
              </Link>
              <Link
                href="/mentoria"
                className="block text-white hover:text-green-200 transition-colors font-medium py-2"
                onClick={() => setShowMobileMenu(false)}
              >
                Mentorias
              </Link>
              <Link
                href="/empresas"
                className="block text-white hover:text-green-200 transition-colors font-medium py-2"
                onClick={() => setShowMobileMenu(false)}
              >
                Empresas
              </Link>
              {!userData && (
                <Button
                  variant="ghost"
                  onClick={() => {
                    setShowMobileMenu(false)
                    handleLoginRedirect()
                  }}
                  className="w-full text-white hover:text-green-200 transition-colors font-medium flex items-center justify-center space-x-2 hover:bg-white/10 py-2"
                >
                  <User className="w-4 h-4" />
                  <span>Acessar Hub</span>
                </Button>
              )}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
