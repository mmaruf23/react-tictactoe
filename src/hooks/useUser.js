export default function useUser() {
  const user = localStorage.getItem('user');
  
  if (!user) {
    const generateUser = 'Guest' + Math.floor(Math.random() * 100);
    localStorage.setItem("user", generateUser);
    return generateUser;
  }
  
  return user;
}
