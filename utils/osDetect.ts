export type OSType = 'Windows' | 'macOS' | 'Linux' | 'Android' | 'iOS' | 'Unknown';

export function detectOS(userAgent?: string): OSType {
    const ua = userAgent || (typeof window !== 'undefined' ? window.navigator.userAgent : '');

    if (!ua) return 'Unknown';

    const userAgentLower = ua.toLowerCase();

    if (/iphone|ipad|ipod/.test(userAgentLower)) {
        return 'iOS';
    }

    if (/android/.test(userAgentLower)) {
        return 'Android';
    }

    if (/windows|win32|win64|wow32|wow64/.test(userAgentLower)) {
        return 'Windows';
    }

    if (/macintosh|mac os x|mac_powerpc/.test(userAgentLower)) {
        return 'macOS';
    }

    if (/linux/.test(userAgentLower)) {
        return 'Linux';
    }

    return 'Unknown';
}