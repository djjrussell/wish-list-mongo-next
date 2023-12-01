export const userExistsByEmail = async (email: string) => {
    const userResponse = await fetch("/api/userExists", {
      method: "POST",
      body: JSON.stringify({ email }),
    });

    const {user} = await userResponse.json();

    if (user) {
      return true;
    }

    return false;
  };