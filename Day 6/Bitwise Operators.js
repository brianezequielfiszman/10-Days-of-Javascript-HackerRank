const getMaxLessThanK = (n, k) => ((k | (k - 1)) > n) ? (k - 2) : (k - 1);
