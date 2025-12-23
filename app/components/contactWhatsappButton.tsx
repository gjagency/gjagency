"use client"

export const ContactWhatsappButton = () => {
    return <a
        onClick={() => {
        if ("_gtag_report_conversion" in window && typeof window._gtag_report_conversion === 'function') {
            window._gtag_report_conversion()
        }
        }}
        href="https://wa.me/542920601338"
        target="_blank"
        className="flex items-center gap-4 bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-full text-lg font-semibold shadow-lg transition hover:scale-105" rel="noopener"
    >
        💬 Contactar por WhatsApp
    </a>
}