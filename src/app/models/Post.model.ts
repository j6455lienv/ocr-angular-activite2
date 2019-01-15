export class Post {
  constructor(
    public title: string,
    public content: string,
    public likes: number,
    public created_date: Date
    ) {}
}
