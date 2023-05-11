import moment from 'moment/moment';

const PREFERRED_LANGUAGE_TAG = '@preferred_language';

export function isDarkMode() {
  return window?.matchMedia('(prefers-color-scheme: dark)')?.matches || false;
}

export function hasPreferredLanguage() {
  return !!localStorage.getItem(PREFERRED_LANGUAGE_TAG);
}

export function getPreferredLanguage() {
  return localStorage.getItem(PREFERRED_LANGUAGE_TAG) || 'en';
}

export function setPreferredLanguage(language) {
  localStorage.setItem(PREFERRED_LANGUAGE_TAG, language);
}

export function diffInYearsAndMonths(startDate, endDate) {
  const language = getPreferredLanguage();
  let texts = {
    and: language === 'pt-BR' ? 'e' : 'and',
    month: language === 'pt-BR' ? 'mês' : 'month',
    months: language === 'pt-BR' ? 'meses' : 'months',
    year: language === 'pt-BR' ? 'ano' : 'year',
    years: language === 'pt-BR' ? 'anos' : 'years',
  };
  const m1 = moment(startDate, 'MM/YYYY');
  const m2 = moment(endDate, 'MM/YYYY');
  const diffYears = m2.diff(m1, 'years');
  const diffMonths = m2.diff(m1, 'months') % 12;
  const yearText = diffYears > 1 ? texts.years : texts.year;
  const monthText = diffMonths > 1 ? texts.months : texts.month;
  const result = `(~ ${
    diffYears > 1 ? `${diffYears} ${yearText} ` : ''
  }${diffMonths} ${monthText})`;
  return result;
}

export function formatJobDuration(startDate, endDate) {
  let durationString = '';
  let endDateString = endDate;
  if (endDateString) {
    durationString = diffInYearsAndMonths(startDate, endDate);
  } else {
    endDateString = getPreferredLanguage === 'pt-BR' ? 'Atual' : 'Current';
  }

  return `${startDate} - ${endDateString} ${durationString}`;
}
