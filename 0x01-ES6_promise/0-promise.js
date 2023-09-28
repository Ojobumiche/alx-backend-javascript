// This function returns a Promise that resolves after a specified delay.
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an API call with a delay of 2 seconds.
    setTimeout(() => {
      // Resolve the Promise with the desired response.
      resolve('True');
    }, 2000); // 2-second delay
  });
}
