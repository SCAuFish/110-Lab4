public abstract class Movie {

    private String _title;
    private int _priceCode;

    public Movie(String title) {
        set_title(title);
    }

    public String get_title() {
        return _title;
    }

    public void set_title(String _title) {
        this._title = _title;
    }

    public abstract double getCharge(int _daysRented);

    public abstract int getFrequentRenterPoints(int _daysRented);
}
