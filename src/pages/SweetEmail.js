import React from "react";
import Swal from "sweetalert2";

const isMobile = window.innerWidth <= 768;

const EmailPusher = () => {
  const promptForEmail = async () => {
    try {
      const { value: email } = await Swal.fire({
        title: "Input Email Address",
        input: "email",
        inputLabel: "Your Email Address",
        inputPlaceholder: "Enter your email address",
      });

      if (email) {
        // First API call: Sending email to the backend: endpoint: /send-email
        const response = await fetch('https://vedic-vani-backend.vercel.app/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        const result = await response.json();

        if (response.ok) {
          // Confirmation of email
          Swal.fire({
            title: "Did you receive a confirmation email?",
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: "YES",
            denyButtonText: "NO",
          }).then(async (result) => {
            if (result.isConfirmed) {
              // Time Delay by 2 second for Backend Checking 
              let timerInterval;
              Swal.fire({
                title: "Verifying API Connectivity!",
                html: "Checking complete in <b></b> milliseconds.",
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                  Swal.showLoading();
                  const timer = Swal.getPopup().querySelector("b");
                  timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                  }, 100);
                },
                willClose: () => {
                  clearInterval(timerInterval);
                }
              }).then((result) => {
                if (result.dismiss === Swal.DismissReason.timer) {
                  console.log("I was closed by the timer");
                }
              });
              // Second API call to Google Apps Script endpoint: /submit-to-google
              try {
                const googleApiResponse = await fetch('https://vedic-vani-backend.vercel.app/submit-to-google', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json', // Ensure the correct Content-Type header
                  },
                  body: JSON.stringify({ email }), // Sending the email as JSON
                });
                
                if (!googleApiResponse.ok) {
                  const errorDetails = await googleApiResponse.text();
                  console.error("Google API Error Response: ", errorDetails);
                  Swal.fire("Failed to submit email to Google API: " + errorDetails);
                }else {
                  const googleApiResult = await googleApiResponse.json();
                  await Swal.fire({
                    title: `Entered Email: ${email}`, text: googleApiResult.message, icon: 'success',
                  });
                
                  if (googleApiResult) {
                    const Toast = Swal.mixin({
                      toast: true,
                      position: "center",
                      showConfirmButton: false,
                      timer: 3600,
                      timerProgressBar: true,
                      didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                      }
                    });
                    await Toast.fire({
                      icon: "success",
                      title: "You Successfully Subscribed - You'll Receive Sholak's Starting Tomorrow Morning",
                    });
                  }
                }
                
              } catch (googleApiError) {
                console.error("Error submitting email to Google API:", googleApiError);
                Swal.fire("An error occurred while submitting to Google API.");
              }
            } else if (result.isDenied) {
              Swal.fire("Please subscribe again with a proper email ID", "", "info");
            }
          });
        } else {
          Swal.fire("Failed to send email: " + result.message);
        }
      } else {
        Swal.fire("No email entered.");
      }
    } catch (error) {
      console.error("Error capturing email:", error);
      Swal.fire("An error occurred while capturing your email.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.description}>
        Want Daily Bhagvat Geeta Shlok's?<br />Subscribe below Button:
      </h2>
      <form onClick={promptForEmail} style={styles.form}>
        <div className='relative inline-flex items-center justify-center p-2 px-4 py-2 overflow-hidden font-medium text-[#00264d] bg-[#00264d] transition duration-300 ease-out border-2 border-[#00264d] rounded-lg shadow-md group w-[170px]'>
          <span className='absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#00264d] group-hover:translate-x-0 ease'>
            <span>U Subscribed!</span>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M14 5l7 7m0 0l-7 7m7-7H3'
              ></path>
            </svg>
          </span>
          <span className='absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease'>
            Subscribe
          </span>
          <span className='relative invisible'>Subscription</span>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "30vh",
    padding: "20px",
    borderRadius: "15px",
    marginTop: isMobile ? "0" : "-3.5rem",
    marginLeft: isMobile ? "0" : "4rem",
    maxWidth: "600px",
  },
  description: {
    fontSize: "1.5rem",
    color: "#333",
    marginBottom: "20px",
    textAlign: "center",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
};

export default EmailPusher;
