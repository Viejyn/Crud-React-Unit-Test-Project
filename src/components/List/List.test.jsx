import { getAllByRole, render, screen, within } from "@testing-library/react";
import { expect } from 'vitest';
import UserList from "./UserList";
import { users } from "./../constants";

it("gönderilen her kullanıcı için ekrana tablo satırı basılır", () => {
    // prop olarak en az bir değer alan bileşeni test etme
    render(<UserList users={users} />);

    // users tablosu içerisindeki bütün satırları al
    const body = screen.getByTestId("table-body");

    // belirli bir kapsayıcı içerisindeki elemanları seçme
    const rows = within(body).getAllByRole("row");
    
    // kullanıcı sayısı kadar satır var mı
    expect(rows).toHaveLength(users.length);
});

it("her bir kullanıcı için email, isim ve yaş değerleri tablo hücresi olarak ekrana basılır", () => {
    render(<UserList users={users} />);

    // her bir kullanıcı için ekrandaki
    // tablo hücrelerinde isim,mail,yaş değerleri yazıyor mu
    for(const user of users) {
        // kullanıcının adını içeren tablo hücresini al
        const name = screen.getByRole("cell",{ name: user.name });
        // kullanıcının mailini içeren tablo hücresini al
        const mail = screen.getByRole("cell", {name: user.email });
        // kullanıcının yaşını içeren tablo hücresini al
        const age = screen.getByRole("cell", { name: user.age });
        // hücreler de ekranda mı kontrol
        expect(name).toBeVisible();
        expect(mail).toBeVisible();
        expect(age).toBeVisible();
    }
});