const API_URL =
  "https://ispeak-backend-production-d877.up.railway.app";

  export async function sendAudio(
  audioBlob: Blob,
  sourceLanguage: string,
  targetLanguage: string
) {
  const formData = new FormData();

  formData.append(
    "audio",
    audioBlob,
    "recording.webm"
  );

  formData.append(
    "source_language",
    sourceLanguage
  );

  formData.append(
    "target_language",
    targetLanguage
  );

  const response = await fetch(
    `${API_URL}/conversation`,
    {
      method: "POST",
      body: formData
    }
  );

  if (!response.ok) {
    throw new Error(
      "Backend request failed"
    );
  }

  return response.json();
}
