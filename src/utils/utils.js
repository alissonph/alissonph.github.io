const PREFERRED_LANGUAGE_TAG = '@preferred_language';

export function hasPreferredLanguage() {
  return !!localStorage.getItem(PREFERRED_LANGUAGE_TAG);
}

export function getPreferredLanguage() {
  return localStorage.getItem(PREFERRED_LANGUAGE_TAG) || 'en';
}

export function setPreferredLanguage(language) {
  localStorage.setItem(PREFERRED_LANGUAGE_TAG, language);
}
