(ns rent-calc.core
  (:use-macros [dommy.macros :only [sel sel1]])
  (:require [dommy.core :as dommy]))
(enable-console-print!)

(defn p [s]
  (js/alert (str s)))

(defn by-id [id]
  (.getElementById js/document id))

(defn parse-int
  ([s] (js/parseInt s))
  ([s r] (js/parseInt s r)))

(defn capitalize [s]
  (str (.toUpperCase (aget s 0))
       (.substring s 1)))

(defn keyword->property [k]
  (let [[x & xs] (-> (str k) (.substring 1) (.split "-"))]
    (apply str x (map capitalize xs))))

(defn id-value [id]
  (parse-int (.-value (by-id id))))

(defn in-dollars [num]
  (-> num (* 100) ((.-round js/Math) ) (/ 100)))

(defn set-content [node]
  (dommy/replace! (sel1 :#app)
                  [:div#app {:style "padding-left: 100px;"}
                   [:div node]
                   [:div [:div#answer]]]))

(defn set-answer [node]
  (dommy/replace! (sel1 :#answer)
                  [:div#answer [:div node]]))

(def globals {:total-sq-ft  1267
              :price        3479
              :utilities    275.12})

(def rooms [{:title "jeff's room"  :headcount 3 :area 171.5625}
            {:title "bryan's room" :headcount 1 :area 155.25}
            {:title "thaly's room" :headcount 1 :area 121.875}])

(defn room->start [room idx]
  [:tr
   [:td (:title room)]
   [:td [:input {:type "number"
                 :value (:headcount room)
                 :id (str "headcount-" idx)
                 :onKeyUp "rent_calc.core.show_rent()"}]]
   [:td [:span {:id (str "area-" idx)} (:area room)]]])

(defn start-page []
  (set-content
   [:div
    [:div 
     [:h2 "Rent Calc 130 36th"]
     [:table.pure-table-bordered.pure-table
      (map
       (fn [[k v]] [:tr
                    [:td (name k)]
                    [:td [:input {:type "number"
                                  :value v
                                  :id (name k)
                                  :onKeyUp "rent_calc.core.show_rent()"}]]])
       globals)]]
    [:div [:h2 "Rooms"]
     [:table.pure-table-bordered.pure-table
      [:th [:td "name"] [:td "headcount"] [:td "area"]
       (map room->start rooms (range 1 100))]]]]))


(defn format-rent [final-map]
  [:div
   [:h2 "Rent"]
   [:table
    (map (fn [rm]
           (let [dollars (in-dollars (:total-price-pp rm))]
             [:tr
              [:td (:title rm)]
              [:td dollars]])) final-map)]])

(defn show-rent []
  (let [total-sq-ft  (id-value "total-sq-ft")
        price        (id-value "price")
        utilities    (id-value "utilities")
        rooms        [{:title "jeff's room"
                       :headcount (id-value "headcount-1")
                       :area 171.5625}
                      {:title "bryan's room"
                       :headcount (id-value "headcount-2")
                       :area 155.25}
                      {:title "thaly's room"
                       :headcount (id-value "headcount-3")
                       :area 121.875}]
        private-area (apply + (map :area rooms))
        occupants    (apply + (map :headcount rooms))
        common-area  (- total-sq-ft private-area)
        price-sqft   (/ price total-sq-ft)
        common-price (-> common-area (* price-sqft) (/ occupants))
        common-util  (/ utilities occupants)
        final-sol    (for [room rooms]
                       (assoc room :total-price-pp (-> (:area room)
                                                       (* price-sqft)
                                                       (/ (:headcount room))
                                                       (+ common-price)
                                                       (+ common-util))))]
    (set-answer (format-rent final-sol))))

(start-page)
(show-rent)

(comment
  (rent)
  (println "Hello world!")
  )
