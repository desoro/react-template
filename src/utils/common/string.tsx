
function toSlug(str: string) {
  return str.slice(0, 48).replace(/ /gi,'_').replace(/[^a-z0-9 _]/gi,'').toLowerCase();
}

function toDate(str: string) {
  return new Date(str).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' });
}

function toElapsed(str: string) {
  if (!str) {
    return 'Never';
  }

  const date = new Date(str);
  const seconds = Math.floor((new Date().getMilliseconds() - date.getMilliseconds()) / 1000);
  let interval;

  interval = Math.floor(seconds / 31536000);
  if (interval > 1) {
    return interval + ' years ago';
  } else if (interval === 1) {
    return '1 year ago';
  }

  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + ' months ago';
  } else if (interval === 1) {
    return '1 month ago';
  }

  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + ' days ago';
  } else if (interval === 1) {
    return '1 day ago';
  }

  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + ' hours ago';
  } else if (interval === 1) {
    return '1 hour ago';
  }

  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + ' minutes ago';
  } else if (interval === 1) {
    return '1 minute ago';
  }

  if (seconds > 1) {
    return Math.floor(seconds) + ' seconds ago';
  }

  return 'just now';
}

export const string = {
  toSlug,
  toDate,
  toElapsed
};