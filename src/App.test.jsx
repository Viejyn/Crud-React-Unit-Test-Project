import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import App from "./App";
import user from "@testing-library/user-event";

it("Uygulama doğru şekilde çalışıyor mu?", async () => {
    render(<App />);
    user.setup();

    // gerekli bileşenler
    const nameInp = screen.getByPlaceholderText('örn:Mustafa');
    const mailInp = screen.getByLabelText('Email');
    const ageInp = screen.getByLabelText('Yaş');
    const button = screen.getByRole('button', {
        name: /kullanıcı ekle/i,
    });

    // formu doldur
    await user.type(nameInp, 'Veli');
    await user.type(mailInp, 'velire@gmail.com');
    await user.type(ageInp, '23');

    // formu gönder
    await user.click(button);

    // isim, yaş ve mail değerlerine karşılık gelen hücreler ekrana basıldı mı?
    screen.getByRole("cell", { name: 'Veli' });
    screen.getByRole("cell", { name: 'velire@gmail.com' });
    screen.getByRole("cell", { name: '23' });
});