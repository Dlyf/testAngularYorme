import { Component } from "@angular/core";

@Component({
    selector: 'app-interpolation',
    templateUrl: './interpolation.component.html',
    styles: ['p {color: red;}', 'a{ text-decoration: none}']
})
export class InterpolationComponent {
    message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ab eaque fugit dolorum blanditiis hic quae dicta eveniet consectetur odit vel nobis modi molestiae accusantium recusandae? Libero reiciendis nisi adipisci."

    sayHello() {
        return "Hello !"
    }

}